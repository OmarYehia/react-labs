const UserInfo = ({  user  }) => {
    const { 
        id, 
        jobTitleName, 
        firstName, 
        lastName, 
        preferredFullName, 
        employeeCode,
        region, 
        phoneNumber,
        emailAddress 
    } = user;

    return (
        <div>
            <p>ID: { id }</p>
            <p>Title: { jobTitleName }</p>
            <p>First Name: { firstName }</p>
            <p>Last Name: { lastName }</p>
            <p>Fullname: { preferredFullName }</p>
            <p>Employee Code: { employeeCode }</p>
            <p>Region: { region }</p>
            <p>Phone number: { phoneNumber }</p>
            <p>Email: { emailAddress }</p>
        </div>
    );
}
 
export default UserInfo;