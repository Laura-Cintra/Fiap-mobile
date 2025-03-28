import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import Header from "./components/Header/Header";
import UserProvider from "./providers/UserContext";
import InputForm from "./components/InputForm";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";


export default function App() {
  const [notas, setNotas] = useState({ LCnota1: "", MEnota2: "", VSnota3: "" });
  const [faltas, setFaltas] = useState("");
  const [mediaFinal, setMediaFinal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const limiteFaltas = 15;
  const mediaMinima = 6;

  function calcularMedia() {
    const { LCnota1, MEnota2, VSnota3 } = notas;
    const notasConvertidas = [
      parseFloat(LCnota1) || 0,
      parseFloat(MEnota2) || 0,
      parseFloat(VSnota3) || 0,
    ];
    const numFaltas = parseInt(faltas) || 0;

    if (numFaltas > limiteFaltas) {
      setMensagem("Reprovado por falta");
      const faltaPercent = ((numFaltas / limiteFaltas) * 100).toFixed(0);
      setMediaFinal(`${faltaPercent}% de faltas`);
    } else {
      const media =
        notasConvertidas
          .sort((a, b) => a - b)
          .slice(1)
          .reduce((a, b) => a + b, 0) / 2;
      setMediaFinal(media.toFixed(2));
      setMensagem(
        media < mediaMinima ? "Reprovado por nota" : "Aprovado com média:"
      );
    }
    setModalVisible(true);
  }

  function resetarCampos() {
    setNotas({ LCnota1: "", MEnota2: "", VSnota3: "" });
    setFaltas("");
    setMediaFinal(null);
    setMensagem("");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={resetarCampos}>
        <Header />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.h1}>Olá, fulano(a)!</Text>
        <Text style={styles.h2}>
          Aqui você poderá verificar a sua situação na FIAP.
        </Text>
        <Text style={styles.p}>Preencha os campos e verifique!</Text>

        {Object.keys(notas).map((key, index) => (
          <InputForm
            key={index}
            label={`Nota ${index + 1}`}
            value={notas[key]}
            onChangeText={(text) => setNotas({ ...notas, [key]: text })}
            placeholder={`Insira a nota ${index + 1}`}
          />
        ))}

  return (
    <UserProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <MainStack />
        </View>
      </NavigationContainer>

    </UserProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111312",
  }
  
});
