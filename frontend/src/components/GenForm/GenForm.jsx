import React, { useState } from 'react';
import './GenForm.css'
import axios from 'axios'


const GenForm = () => {
    const [selection, setSelection] = useState('');
    const [textareaContent, setTextareaContent] = useState('');
    const [displayText, setDisplayText] = useState('');

    const handleChange = (event) => {
        if(event.target.name === 'selection') {
            setSelection(event.target.value);
        } else if(event.target.name === 'textareaContent') {
            setTextareaContent(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selection === 'image') {
            genImg();
        } else if (selection === 'text') {
            genTxt();
        }
    }

    const genImg = () => {
        // Code to generate image
        axios.post('http://localhost:9000/generateImage', { content: textareaContent })
            .then(response => {
                const image = response.data.image;
                const imgSrc = `data:image/png;base64,${image}`;
                document.getElementById('imageContainer').src = imgSrc;
                setDisplayText('')
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    
    const genTxt = () => {
        // Code to generate text
        axios.post('http://localhost:9000/generateText', { content: textareaContent })
            .then(response => {
                const text = response.data
                setDisplayText(text)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }
    

    return (
        <form className="gen-form" onSubmit={handleSubmit}>
            <h1>Anything is Possible</h1>
            <select name="selection" onChange={handleChange}>
                <option value="">Select...</option>
                <option value="image">Image</option>
                <option value="text">Text</option>
            </select>
            <textarea name="textareaContent" rows="4" onChange={handleChange}></textarea>
            <button type="submit">Generate</button>
            <div>
                <img id="imageContainer"/>
            </div>
            <div>
            {displayText.split(',').map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
        </form>
    );
    
    
}

export default GenForm;
