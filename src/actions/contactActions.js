export const addContactAction = (contact) => {
    // adding contacts to the firestore from user interface
    // but contacts are not displayed at the front end -user interface
  return(dispatch, state, {getFirestore}) => {
      getFirestore()
      .collection('contacts')
      // this code will add time of creating the doc in the database
      .add({...contact, timestamp: getFirestore().FieldValue.serverTimestamp()})
      .then((doc) => {
        console.log(doc);
        
        // to display data on the User interface
        // but data disppears after page refresh
        //this command is commented because to prevent double data
       // dispatch({
         //  type: 'ADD_CONTACT',
         //  payload: contact,
         //});
      });
    };   
  };
  
  // deleting data from the firestore database
  export function deleteContactAction(id) {
     return (dispatch, state, {getFirestore})=>{
       getFirestore()
       .collection('contacts')
       .doc(id)
       .delete()
       .then(()=> { });
     };    
  };
  
  // update data in firease db
  export function updateContactAction(id, updatedContact) {
    return (dispatch, state, {getFirestore})=>{
      getFirestore()
      .collection('contacts')
      .doc(id)
      .set(updatedContact)
      .then(() =>{}) //if success
      .catch((err) =>{}); // if not success
    }
    
    //  {
    //   type: 'UPDATE_CONTACT',
    //   payload: { id: id, updatedContactInfo: updatedContact },
    // };
  }
  // get data from firebase database 
  // include componentDidMount on App js component

  export const getAllContacts = ()=>{
    return (dispatch, state, {getFirestore}) =>{
      getFirestore()
      .collection("contacts")
      //sorting contacts by contactname in ascending order
     .orderBy("contactname", "asc")
     // onsnapshot capture a copy of the db
      .onSnapshot((snapshot) =>{
        let contacts = []; // snapshot doc is passed to this array
        snapshot.forEach ((doc)=>{ // maps the data one after another
          //this code moves all data from firestore and add id
          // so each data  - individual contacts can be deleted
          contacts.push({...doc.data(), id: doc.id}); 
        });
        console.log(contacts);
        dispatch({
          type: "SET_ALL_CONTACTS",
            payload: contacts,
        });
      },
       (err) =>{}
      );
    };
  }
  
  