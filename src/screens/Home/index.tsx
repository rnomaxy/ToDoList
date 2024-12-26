import { useState } from 'react';
import { useTheme } from "styled-components/native";

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { MaterialIcons } from "@expo/vector-icons";

import { Container, AddButton, InputAndButton } from "./styles";
import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Status } from "@components/Status";
import { Tasks } from "@components/Task";
import { ListEmpty } from '@components/ListEmpty';
import { FlatList } from 'react-native';

export function Home() {
    const { COLORS } = useTheme();
    const [tasks, setTasks] = useState<{ id: string, text: string, isChecked: boolean }[]>([]);
    const [taskText, setTaskText] = useState('');

    function handleTaskAdd() {
        if (taskText.trim() === '') return;

        const newTask = { id: uuidv4(), text: taskText, isChecked: false };
        setTasks(prevState => [...prevState, newTask]);
        setTaskText('');
    }

    function handleTaskRemove(id: string) {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }

    function handleTaskCheck(id: string) {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, isChecked: !task.isChecked } : task
            )
        );
    }

    const createdTasks = tasks.length;  
    const completedTasks = tasks.filter(task => task.isChecked).length;

    return (
        <Container>
            <Header />

            <InputAndButton>
                <Input
                    value={taskText}
                    onChangeText={setTaskText}
                />
                <AddButton onPress={handleTaskAdd}>
                    <MaterialIcons name="add-circle-outline" size={24} color={COLORS.GRAY_100} />
                </AddButton>
            </InputAndButton>

            <Status
                createdCount={createdTasks}
                completedCount={completedTasks} />

            <FlatList
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<ListEmpty />}
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Tasks
                        task={item.text}
                        isChecked={item.isChecked}
                        onRemove={() => handleTaskRemove(item.id)}
                        onCheck={() => handleTaskCheck(item.id)}
                    />
                )}
            />
        </Container>
    );
}