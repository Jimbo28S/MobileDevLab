import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getUsers } from "../lib/supabase_crud";
import React from "react";

export default function Lab6() {
    const [users, setUsers] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getUsers();
                setUsers(data);
                console.log(users);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
    
        fetchData();
    }, []);
    
    return (
        <View style={styles.dbContainer}>
            {loading ? (
                <Text>Loading...</Text>
            ) : error ? (
                <Text>Error: {error}</Text>
            ) : (
                users.map((user) => (
                    <Text style={styles.dbText} key={user.id}>User ID: {user.id}, Created at: {user.created_at}</Text>
                ))
            )}
        </View>
    );
    
}

const styles = StyleSheet.create({
    dbContainer: {
        width: 390,
        height: 600,
        backgroundColor: "green"
    },

    dbText: {
        color: "blue",
        fontSize: 20,
        borderWidth: 2,
        borderColor: "black",
        marginVertical: 10
    }
})
