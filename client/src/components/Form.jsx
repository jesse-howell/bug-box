// TODO: import into pages where needed later!

function Form() {
    return (
        <div class="container">
            {/* will add in when mvp for proj has been reached */}
            {/* 
            <div className="form-group">
                <label for="locInput">"Where do you live?"</label>
                <input type="text" class="form-control" placeholder="your location"></input>
            </div>
            <div className="form-group">
                <label for="nameInput">"What should we call you?"</label>
                <input type="text" class="form-control" placeholder="your name"></input>
            </div>
            <div className="form-group">
                <label for="pronInput">"What pronouns do you use?"</label>
                <input type="text" class="form-control" placeholder="your pronouns"></input>
            </div>
            */}
            <div className="form-group">
                <label for="emailInput">"Please enter a valid email address:"</label>
                <input type="email" class="form-control" placeholder="email" required></input>
            </div>
            <div className="form-group">
                <label for="usernameInput">"Please enter a username:"</label>
                <input type="text" class="form-control" placeholder="username" required></input>
            </div>
            <div className="form-group">
                <label for="pwdInput">"Please enter a password (8 to 12 alphanumeric characters):"</label>
                <input type="password" class="form-control" placeholder="password" required></input>
            </div>
            <div className="form-group">
                <input type="submit" value="create profile"></input>
            </div>
        </div>
    )
}

export default Form;