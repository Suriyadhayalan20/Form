
let handleSubmit=(e)=>{
    e.preventDefault();

    const fname = document.querySelector('.name').value;
    // const lname = document.querySelector('.lname').value;
    const email = document.querySelector('.email').value;
    const pass = document.querySelector('.password').value;
    // const cpass = document.querySelector('.cpass').value;

    localStorage.setItem('FirstName', fname);
    // localStorage.setItem('LastName', lname);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', pass);
    // localStorage.setItem('Cpassword', cpass);

    location.href="home.html"

}   
