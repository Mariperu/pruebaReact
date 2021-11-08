import React /* {useEffect, useState} */ from "react";
import AddProductD from "./AddProductD.jsx";
import ProductsListD from "./ProductsListD.jsx";
import {doc, setDoc} from 'firebase/firestore';
import {db} from '../firebase/firebaseConfig'

// const firestore = getFirestore(firebaseApp);

const CharacterDF = () => {
 
  // const [arrayProducts, setArrayProducts] = useState([])
  const fakeData=[
    { id:1, description:'fake product 1', url: 'https://picsum.photos/428'},
    { id:2, description:'fake product 2', url: 'https://picsum.photos/428'},
    { id:3, description:'fake product 3', url: 'https://picsum.photos/428'},
  ];

  // async function buscarDocumentOrCreateDocument (idDocument){
  //   // crear referencia al documento 
  //   const docuRef= doc(firestore, `users/${idDocument}`)
  //   //buscar documento
  //   const consult = await getDoc(docuRef);
  //   // revisar si existe
  //   if(consult.exist()){
  //     // si si existe
  //     const infoDocu = consult.data();
  //     return infoDocu.products;
  //   }else{
  //     // si no existe
  //     await setDoc(docuRef, {reacciones: [...fakeData]})
  //     const consult = await getDoc(docuRef);
  //     const infoDocu = consult.data();
  //     return infoDocu.products;      
  //   }

  // }

  // useEffect(() => {
  //   async function fetchProducts(){
  //     const productsFetchs = await buscarDocumentOrCreateDocument(

  //     )
  //   }
  // }, [])

  const addOrEdit =async(objectProduct)=>{
    await setDoc(doc(db, 'products','New product'), objectProduct)
    console.log('neva tarea agregada')
  }

    
  return (
    <section className='container' style={{background: "secondary"}}>
      <h3>¡Bienvenida/o!</h3>
      <p> Disfruta de los productos 1</p>
      <hr /> 
      <AddProductD addOrEdit={addOrEdit}/>
      <ProductsListD arrayProducts={fakeData} />
    </section>
  );
};

export { CharacterDF };
