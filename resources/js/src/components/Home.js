import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Home = () => {

    const [posts, setPosts] = useState(null);

    useEffect(() => {
        api.getAllPosts().then(res => {
            const result = res.data;
            setPosts(result.data);
        });
    }, []);

    const renderPost = () => {
        if (!posts) {
            return (
                <tr>
                    <td colSpan="4"> Chargement... </td>
                </tr>
            );
        }
        if (posts.length === 0) {
            return (
                <tr>
                    <td colSpan="4"> Pas de post... Ajoutez-en ! </td>
                </tr>
            );
        }
        return posts.map((post) => (
            <tr>
                <td>{post.id}</td>
                <td>{post.titre}</td>
                <td>{post.description}</td>
            </tr>
        ))
    }

    return (
        <AppContainer
            title="CRUD"
        >
            <Link to="/add" className="btn btn-primary"> Ajouter un post </Link>
            <div className="table-responsive">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Titre</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPost()}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;