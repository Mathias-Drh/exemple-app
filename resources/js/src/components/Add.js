import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Add = () => {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addPost({
                titre, description,
            });
            history.pushState('/');
        } catch {
            alert('Echec de l\'envoi. ');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer
            titre="Ajouter"
        >
            <form>
                <div className="form-group">
                    <label>Titre</label>
                    <input
                        value={titre} onChange={e => setTitre(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description} onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-success"
                        onClick={onAddSubmit} disabled={loading}>
                        {loading ? 'LOADING...' : 'OK'}
                    </button>
                </div>
            </form>
        </AppContainer>
    );

}

export default Add;