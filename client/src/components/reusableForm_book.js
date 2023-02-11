import React from 'react'

const reusableForm_book = () => {
  return (
    <div>
       <from>
          <input type="text"  placeholder="Book Name"></input><br/>
          <input type="text"  placeholder="Author"></input><br/>
          <input type="text"  placeholder="Price From"></input><br/>
          <button type="submit">Submit</button>
        </from>
    </div>
  )
}

export default reusableForm_book
