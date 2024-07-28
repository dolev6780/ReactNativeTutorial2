import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
export default function Feed() {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    const data = await response.json();
    setPosts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => {
          return (
            <View style={styles.postCard}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.body}>{item.body}</Text>
            </View>
          );
        }}
        ListEmptyComponent={<Text>no posts</Text>}
        ListHeaderComponent={<Text>Posts</Text>}
        ListFooterComponent={<Text>End of Posts</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postCard: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  title: { fontSize: 24 },
  body: {
    color: "gray",
  },
});
