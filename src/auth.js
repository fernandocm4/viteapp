import { ref, computed } from "vue";

const token = ref(localStorage.getItem('token'));

export const useAuth = () => {
    const isLogged = computed(() => !!token.value);
    const login = (new_token) => {
        localStorage.setItem('token', new_token);
        token.value = new_token;
    };
    const logout = () => {
        localStorage.removeItem('token');
        token.value = null;
    };

    const register = () => {
        
    }

    return {
        isLogged,
        login,
        logout,
    };
};