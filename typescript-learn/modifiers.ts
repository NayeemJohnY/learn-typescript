// class
class User {
    public email: string
    #name: string
    private readonly city: string = "NY"
    constructor(email: string, name: string) {
        this.email = email;
        this.#name = name;
    }

}

const john = new User("Adasfd@con.com", "JOhn")
john.city
john.#name


class AdminUser {
    constructor(
        public email: string,
        public name: string,
        private readonly city: string = "NY",
        protected permissions?: string[]
    ) {
    }

    private _totalUsers = 1

    public get getPermissions(): string[] {
        return ["manage_users", "approve_requests"]
    }


    public get totalUsers(): number {
        return this._totalUsers
    }


    public set totalUsers(v: number) {
        this.totalUsers = v
    }

    private updatePermissions() {
        this.permissions = ["manage_users"];
    }

}
const james = new AdminUser("Adasfd@con.com", "JOhn")
james.name
james.email
james.city
james.totalUsers
james.totalUsers = 10
james.getPermissions
james.updatePermissions

// inheritance
class JamesAdmin extends AdminUser{

    IsAdmin : boolean = true
    updateUserEmail() {
       this.email = "asdsa@asfsd";
        this.permissions = ["asdsafds"];
    }
}