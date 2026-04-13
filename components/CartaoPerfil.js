import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function CartaoPerfil(props) {

  function enviarEmail() {
    Alert.alert("E-mail enviado para:", props.email);
  }

  return (
    <View style={styles.card}>

      <Text style={styles.nome}>{props.nome}</Text>
      <Text style={styles.texto}>{props.profissao}</Text>
      <Text style={styles.texto}>{props.cidade}</Text>
      <Text style={styles.texto}>{props.email}</Text>

      <TouchableOpacity style={styles.botao} onPress={enviarEmail}>
        <Text style={styles.textoBotao}>Enviar E-mail</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center"
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000"
  },

  texto: {
    color: "#000"
  },

  botao: {
    backgroundColor: "#27AE60",
    padding: 10,
    borderRadius: 8,
    marginTop: 10
  },

  textoBotao: {
    color: "#FFF"
  }

});
