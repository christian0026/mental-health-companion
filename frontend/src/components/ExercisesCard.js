import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ExerciseCard = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:5000/api/exercises');
            setExercises(res.data);
        };
        fetchData();
    }, []);

    return (
        <div>
            {exercises.map((exercise) => (
                <div key={exercise.id}>
                    <h3>{exercise.name}</h3>
                    <p>{exercise.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ExerciseCard;
