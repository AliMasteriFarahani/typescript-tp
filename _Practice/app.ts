enum gender{
    male,
    female
}

function getName<T>(name:T):String {
    return 'dddd';
}

getName<gender>(gender.male);