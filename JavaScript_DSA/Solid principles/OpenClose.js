//open for extension but closed to notification
//we can change the behaviors  of the codeby adding new code on the function to it.

const roles =["Admin","User"]
checkRole = (user)=>{
    if(roles.includes(user.role)){
        return true;
    }else{
        return false;
    }
}

addRole(roles)
    roles.push(roles);

checkRole("Admin");
checkRole("Foo");
addRole("SuperUser");