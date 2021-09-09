export const authService = {

    async getUserInfo() {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
    },

    async isLoggedIn() {
        const user = await this.getUserInfo();
        return user !== null;
    },

    async getUserDetails() {
        const user = await this.getUserInfo();
        return (user !== null ? user.userDetails : null);
    },

    async isUserInRole(role){
        const user = await this.getUserInfo();
        return (user !== null ? user.userRoles.includes(role) : false);
    }

}