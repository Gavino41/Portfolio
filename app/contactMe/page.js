"use client";
import { useState } from 'react';
import styles from './page.module.css'


export default function ContactMe() {
  const [form, setForm] = useState ({
    email: "",
    name: "",
    message: "",
    });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(form).every((val) => val.trim() !== '');
    if (allFilled != "") {
      console.log("submitted", form)
    }
    alert("please fill out all of form")
  }
  return (
    <>
      <h1 className={styles.headerText}> Contact Me </h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.info}>
            <label className={styles.label}>
              Name:
              <input
                className={styles.email}
                type='text'
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label className={styles.label}>
              Email:
              <input
                className={styles.email}
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <label className={styles.label}>
            Message:
            <textarea
              className={styles.message}
              type='text'
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button className={styles.submit} type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
