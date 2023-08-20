var signupContent = `
<div class="signup">
    <h3>Signup to view the content</h3>
    <form action="home.html" name="credentialForm" method="get">

        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" id="username" placeholder="Username"/>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password" placeholder="Password"/>
        </div>
        
        <button type="submit" class="submit btn btn-primary">Signup</button>
    </form>
</div>`;

var loginContent = `
<div class="login">
    <h3>Login to view the content</h3>
    <form action="home.html" name="credentialForm" method="get">

        <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" name="username" id="username" placeholder="Username"/>
        </div>

        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" name="password" id="password" placeholder="Password"/>
        </div>

        <button type="submit" class="submitButton btn btn-primary">Login</button>
    </form>
</div>`;


jQuery.validator.addMethod("startsWithCaptial", function (value, element) {
    return this.optional(element) || /^[A-Z]$/.test(value[0])
}, "First letter must be in UpperCase")

jQuery.validator.addMethod("lettersOnly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/.test(value)
}, "Letters only please")

jQuery.validator.addMethod("alphaNumericLower", function (value, element) {
    return this.optional(element) || /^[a-z0-9]+$/.test(value)
}, "Passowrd must be in LowerCase and AlphaNumeric")

$(function () {

    $("#signupShowButton").click(function () {
        $(".content").html(signupContent);
        formValidation();
    })

    $("#loginShowButton").click(function () {
        $(".content").html(loginContent);
        formValidation();
    })
    
    function formValidation() {
        $("form[name='credentialForm']").validate({
            rules: {
                username: {
                    required: true,
                    lettersOnly: true,
                    startsWithCaptial: true,
                },

                password: {
                    required: true,
                    alphaNumericLower: true,
                }
            },

            messages: {
                username: {
                    required: 'Username is required'
                },
                password: {
                    required: 'Password is required'
                }
            },

            submitHandler: function (form) {
                form.submit();
            }
        });
    }
    formValidation();
});
