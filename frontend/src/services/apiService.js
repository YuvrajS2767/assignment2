import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1';

export const uploadDocument = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(`${API_URL}/documents/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const getDocumentMetadata = async (docId) => {
    return axios.get(`${API_URL}/documents/metadata/${docId}`);
};
