const api_url = import.meta.env.VITE_APP_API_URL;

export const apiClient = async (endpoint, options = {}) => {
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers,
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(`${api_url}/${endpoint}`, {
        ...options,
        headers,

    });
    if (!response.ok) {
        if (response.status === 401) {
            localStorage.removeItem('token');
        }
        throw new Error('Erro ao acessar o servidor');
    }
    return response.json();
};