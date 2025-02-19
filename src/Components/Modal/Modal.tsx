import { useState } from "react";
import "./Modal.css";

function Modal(): JSX.Element {

    const [modal,setModal]=useState<boolean>(false);


    const toggleModal=()=>{
        setModal(!modal)
    }

   
    return (
        <div className="Modal">
            
             <button className="btm-modal" onClick={toggleModal}>open</button>

            
            {modal && (
                       <div className="modal">
                       <div  onClick={toggleModal} className="overlay"></div>
                       <div className="modal-content">
                           <h2>רשימת טיפולים</h2>
       
                           <p>
                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum error provident obcaecati pariatur. Libero pariatur aut quisquam id commodi earum, suscipit nemo perspiciatis expedita est sequi eius a voluptatum culpa velit sed impedit itaque nostrum fugiat? Ullam, possimus aspernatur, ipsa eum quod pariatur voluptatem accusamus, tenetur quo esse reprehenderit impedit.
                           </p>
                           <button className="close-modal" onClick={toggleModal}>close</button>
       
       
                       </div>
       
                       </div>

            )}
         

			
        </div>
    );
}

export default Modal;
