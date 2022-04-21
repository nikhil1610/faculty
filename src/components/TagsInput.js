import React, { useState, useEffect } from 'react';
import {Form} from 'react-bootstrap';

import '../css/TagsInput.css';

export const DropdownTagsInput = ({inputProps, addToList, suggestionList, onSelect, renderOptions, currentValue, renderValue}) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsBoxOpen, toggleSuggestionBox] = useState(false);

    // const handleKeyPress = (e) => {
    //     if(e.keyCode === 13){
    //         addToList(inputValue);
    //         setInputValue('');
    //     }
    // }

    const handleInputChange = (e) => {
        let value = e.target.value;
        setInputValue(value);

        if(value){
            value = value.toLowerCase();

            let newList = [...suggestionList];
            newList = newList.filter((item)=>{
                return renderOptions ? renderOptions(item).toLowerCase().includes(value) : item.label.toLowerCase().includes(value)
            });
            setSuggestions(newList);
        } else {
            setSuggestions(suggestionList);
        }
    }  

    useEffect(()=>{
        if(suggestionList.length > 0){
            setSuggestions(suggestionList);
        }
    },[suggestionList]);

    useEffect(()=>{
        if(currentValue)
            setInputValue(renderValue(currentValue));
    },[currentValue]);

    return (  
        <div className='container' onBlur={()=>toggleSuggestionBox(false)}>
            <div>
                <Form.Control
                    type='text' 
                    value={inputValue}
                    onChange={handleInputChange}
                    // onKeyDown={handleKeyPress} 
                    onFocus={()=>toggleSuggestionBox(true)}
                    {...inputProps}
                />
            </div>
        {suggestionsBoxOpen &&
            <div className='suggestion-box'>
                {suggestions.map((option, i)=>(
                    <li key={i} onMouseDown={()=>{
                        onSelect(option);
                        setInputValue('');
                        }}>
                    {renderOptions ? renderOptions(option) : option}
                    </li>
                ))}
            </div>
        }
        
        </div>
    );
}
