<template>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header">
          <slot name="header">
            Please insert your review below
          </slot>
          <button type="button" class="btn-modal-close" @click="close()">
            x
          </button>
        </header>
  
        <section class="modal-body">
            <div class="form-floating" style="width: 50%; height: 50%">
                <textarea v-model="userReview" style="width: 100%; height: 100%" class="form-control" placeholder="Leave a review here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">You may only leave one review!</label>
            </div>
         </section>
  
        <footer class="modal-footer">
          <slot name="footer">
            Thank you for your review!
          </slot>
          <button type="button" class="btn-modal-green" @click="submitReview()">
            Submit Review
          </button>
        </footer>
        <div>
            <!-- Taking the uniName from parent uniInfo page dynamically to add to the specific uni collection in firebase -->
            {{uniNamePassed}}
        </div>
      </div>
    </div>
  </template>


<style>
.user_review{
    height: 100%;
    width: 100%;
}

.modal-backdrop {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
}

.modal {
  display: flex;
  flex-direction: column;
  min-width:100vw;
  height:100vh;
  justify-content:center;
  position: absolute;
  top: 25%;
  left: 25%;
}

.modal-header {
  position: relative;
  top: 1rem;
  color: #ffffff;
  font-weight:bolder;
  font-size:x-large;
  width:50%;
  border-bottom: none;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.btn-modal-close {
  position: absolute;
  top: 0;
  left: 103%;
  border: none;
  font-size: 2rem;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #ffffff;
  background: transparent;
}

.btn-modal-green {
  color: white;
  position: absolute;
  top: 50%;
  left: 39%;
  background: #323030;
  border: none;
  border-radius: 0.3rem;
  padding:0.5rem;
  margin-top: 1rem;
}
</style>

<script>
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { doc, setDoc} from "firebase/firestore";
  import { fireStore } from "@/service/Firebase/firebaseInit";

  export default {
    name: 'Modal',
    data(){
        return{
            userReview: 'My review is..',
            currentUserName: '',
            currentUserEmail: '',
            currentUserTime: '',
        }
    },
    methods: {
        // When closed button is clicked in modal component and then to update parent
        close() {
            console.log('closing from modal')
            this.$emit('close');
        },

        // When review has been submitted in modal component and then to update parent
        reviewDone(){
            console.log('review done from modal')
            this.$emit('review-done')
        },

        // Fetching current user details from parent async to be used to update the firebase review collection accordingly
        async getCurrentUser() {
            onAuthStateChanged(getAuth(), (user) => {
                if (user) {
                    console.log('user currently is', user)

                    this.currentUserEmail = user.email
                    const name = user.email.split('@')[0]
                    const firstLetter = name.charAt(0)
                    const firstLetterCap = firstLetter.toUpperCase()
                    const remainingLetters = name.slice(1)
                    this.currentUserName = firstLetterCap + remainingLetters
                    console.log('Modal current user is', this.currentUserEmail, this.currentUserName)
                }
            })
        },

        // When review submit button has been clicked, used to populate the specific firebase uni review collection 
        // where each review IDed by the current user email and to update parent
        async submitReview() {
            let testUni = this.uniNamePassed
            let likes = 420

            const date = new Date();
            const currentDate = date.getDate()
            const currentMonth = date.getMonth() + 1
            const currentYear = date.getFullYear()
            const currentHour = date.getHours()
            let currentMinute = date.getMinutes()
            if (currentMinute < 10) {
                currentMinute = '0' + String(currentMinute)
            }
            this.currentUserTime = `${currentDate}-${currentMonth}-${currentYear} ${currentHour}:${currentMinute}`

            let collectionToBeAdded = testUni + ' Reviews'
            console.log(this.userReview, this.currentUserTime, this.currentUserEmail, this.currentUserName, collectionToBeAdded)

            await setDoc(doc(fireStore, `Universities2/${testUni}/${collectionToBeAdded}`, this.currentUserEmail), {
                Email: this.currentUserEmail,
                Likes: likes,
                ReviewInfo: this.userReview,
                UniName: testUni,
                UserName: this.currentUserName,
                currentTime: this.currentUserTime
            })
            .then(() => {
                let text = "Your review has been successfully added, the page will now be automatically refreshed!"
                 + "\n\n" + "Thank you " + this.currentUserName + "!"
                alert(text)
                this.reviewDone()
                location.reload()
            })
            .catch(error => {
                alert('An error has occurred, please check the console for instructions')
                console.log(error.message)
            })
        }
    },
    created(){
        this.getCurrentUser()
        console.log('data from parent is', this.uniNamePassed)
    },
    props: ['uniNamePassed']
  };

// Other way to add document to nested collection but w random document id
// const dbRef = collection(fireStore, `Universities2/${testUni}/${collectionToBeAdded}`)
// const dataAdded = {
//     Email: this.currentUserEmail,
//     Likes: likes,
//     ReviewInfo: this.userReview,
//     UniName: testUni,
//     UserName: this.currentUserName,
//     currentTime: this.currentUserTime
// }
// let email1 = this.currentUserEmail
// addDoc(dbRef, dataAdded)
//     .then(docRef => {
//         alert('Your review has been successfully added, thank you!')
//         this.close()
//     })
//     .catch(error => {
//         console.log(error.message)
//     })

</script>