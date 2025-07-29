import React from 'react'
import styles from './contactStyles.module.css'

function Contact() {
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
       <form action="">
        <div className='fromGroup'>
            <label htmlFor='name' hidden>
                Name
            </label>
            <input
            type='text'
            name='name'
            id='name'
            placeholder='name'
            required
            />
        </div>

        <div className='fromGroup'>
            <label htmlFor='email' hidden>
                Email
            </label>
            <input
            type='email'
            name='email'
            id='email'
            placeholder='email'
            required
            />
        </div>

        <div className='fromGroup'>
            <label htmlFor='message' hidden>
                Message
            </label>
            <textarea
            type='text'
            name='message'
            id='message'
            placeholder='message'
            required
            ></textarea>
        </div>
        <input className='hover btn' type='Submit' value="Submit" />
       </form>
    </section>
  );
}

export default Contact