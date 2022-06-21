var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
function getName(name) {
    return 'dddd';
}
getName(gender.male);
