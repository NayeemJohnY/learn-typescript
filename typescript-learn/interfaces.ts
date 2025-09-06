interface IUser {
    email: string
    userId: number
    startTrail: () => string
    expiryTrail(): Date
    getCoupon(name: string): number
}

// Reopening or extending
interface IUser {
    githubUserId: string
}

// Loose form of class
const james: IUser = {
    email: "asdsa@com", userId: 2211, startTrail: () => {
        return "trail started"
    },
    expiryTrail: () => {
        return new Date()
    },
    getCoupon: (name: "Jpoolll") => {
        return 10
    },

    githubUserId: "122345"
}


interface Admin extends IUser {
    role: "contributor" | "viewer" | "admin"
}

const ceaser: Admin = {
    email: "asdsa@com", userId: 2211, startTrail: () => {
        return "trail started"
    },
    expiryTrail: () => {
        return new Date()
    },
    getCoupon: (name: "Jpoolll") => {
        return 10
    },

    githubUserId: "122345",

    role: "admin"
}



