let password;
let oldpass;
let newpass;
let newpassNew;
let change;
let userpass = 'UserPass';
let adminpass = 'AdminPass';

let login = prompt('Please input login');

if (!login) {
    alert('Canceled');
} else if (login.length < 6) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else {
    if (login === 'user@gmail.com') {
        password = prompt('Please input password');

        if (!password) {
            alert('Canceled');
        } else if (password === userpass) {
            change = confirm('Do you want to change your password?');

            if (!change) {
                alert('You have failed the change.');
            } else {
                oldpass = prompt('Please input old password');

                if (!oldpass) {
                    alert('Canceled');
                } else if (oldpass === userpass) {
                    newpass = prompt('Please input new password');

                    if (newpass.length < 5) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        newpassNew = prompt('Please input new password again');

                        if (newpassNew !== newpass) {
                            alert('You wrote the wrong password.');
                        } else {
                            alert('You have successfully changed your password.');
                        }
                    }
                } else {
                    alert('You wrote the wrong password.');
                }
            }
        } else {
            alert('Invalid password');
        }
    } else if (login === 'admin@gmail.com') {
        password = prompt('Please input password');

        if (!password) {
            alert('Canceled');
        } else if (password === adminpass) {
            change = confirm('Do you want to change your password?');

            if (!change) {
                alert('You have failed the change.');
            } else {
                oldpass = prompt('Please input old password');

                if (!oldpass) {
                    alert('Canceled');
                } else if (oldpass === adminpass) {
                    newpass = prompt('Please input new password');

                    if (newpass.length < 5) {
                        alert('It’s too short password. Sorry.');
                    } else {
                        newpassNew = prompt('Please input new password again');

                        if (newpassNew !== newpass) {
                            alert('You wrote the wrong password.');
                        } else {
                            alert('You have successfully changed your password.');
                        }
                    }
                } else {
                    alert('You wrote the wrong password.');
                }
            }
        } else {
            alert('Invalid password');
        }
    } else {
        alert('I don’t know you');
    }
}
