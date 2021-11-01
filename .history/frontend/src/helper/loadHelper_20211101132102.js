// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from 'firebase/storage'

// const loadHelper = (type, folder, file) => {
//   if (!type || !folder || !file) {
//     return
//   }

//   const storage = getStorage()

//   const metadata = {
//     contentType: type,
//   }

//   const storageRef = ref(storage, `${folder}/` + file.name)
//   const uploadTask = uploadBytesResumable(storageRef, file, metadata)


//   uploadTask.on(
//     'state_changed',
//     snapshot => {
//       const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//       console.log('Upload is ' + progress + '% done')
//     },
//     error => {
//       console.error(error)
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then(downloadURL =>
//         console.log(downloadURL)
//       )
      
//     }
//   )
  
// }

// export default loadHelper
