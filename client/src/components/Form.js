import '../styles/Form.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = () => {

   const { register, handleSubmit, reset, formState: { errors } } = useForm();

   const onSubmit = (data) => {
      const config = {
         method: 'post',
         url: "/api/message/add",
         headers: {},
         data: data
      }
      axios(config)
         .then(res => {
            console.log(res.data);
            reset();
         })
         .catch(() => console.log("There was a catch error"))
   };

   return (
      <>
         <p>{errors.message}</p>
         <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
               <label>
                  <span className="title">First Name</span>
                  <input id='firstNameInput' className={errors.firstName && "error"} type="text" placeholder="first name"
                     {...register("firstName", { required: "Please provide your first name", })}
                  />
                  <span className="error">{(errors.firstName && errors.firstName.message)}</span>
               </label>
               <label>
                  <span className="title">Last Name</span>
                  <input id='lastNameInput' type="text" placeholder="last name"
                     {...register("lastName")}
                  />
               </label>
            </fieldset>
            <fieldset>
               <label>
                  <span className="title">Email</span>
                  <input id='emailInput' className={errors.email && "error"} type="text" placeholder="john@example.com"
                     {...register("email", { required: "We'll need an email address to get back to you" })}
                  />
                  <span className="error">{(errors.email && errors.email.message)}</span>
               </label>
               <label>
                  <span className="title">Phone number</span>
                  <input id='phoneInput' type="text" placeholder="025 555 555"
                     {...register("phone")}
                  />
               </label>
            </fieldset>
            <fieldset>
               <label>
                  <span className="title">Subject</span>
                  <input id='subjectInput' className={errors.subject && "error"} type="text" placeholder="Subject"
                     {...register("subject", { required: "Subject needed" })}
                  />
                  <span className="error">{(errors.subject && errors.subject.message)}</span>
               </label>
            </fieldset>
            <fieldset>
               <label>
                  <span className="title">Message</span>
                  <textarea id='messageInput' className={errors.messageContent && "error"} placeholder="Tell us more..."
                     {...register("messageContent", { required: "Please tell us how we can help you", })}
                  />
                  <span className="error">{(errors.messageContent && errors.messageContent.message)}</span>
               </label>
            </fieldset>
            <button id='submitButton' type="submit">Submit</button>
         </form>
      </>
   )
}

export default Form;