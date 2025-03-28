import { Text, View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import InputForm from "../components/InputForm";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useUser } from "../providers/UserContext";
import { setHandler } from "../GlobalReset";

export default function Aulas() {
  const { user } = useUser();
  const [notas, setNotas] = useState({ LCnota1: "", MEnota2: "", VSnota3: "" });
  const [faltas, setFaltas] = useState("");
  const [mediaFinal, setMediaFinal] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [erroModalVisible, setErroModalVisible] = useState(false);
  const [mensagem, setMensagem] = useState("");

    const aulas = 200;
    const limiteFaltas = 0.25 * aulas;
    const mediaMinima = 6;

  function calcularMedia() {
    const { LCnota1, MEnota2, VSnota3 } = notas;
    const notasConvertidas = [
      parseFloat(LCnota1) || 0,
      parseFloat(MEnota2) || 0,
      parseFloat(VSnota3) || 0,
    ];
    const numFaltas = parseInt(faltas) || 0;
    // Validação: notas entre 0 e 10
    if (notasConvertidas.some(nota => isNaN(nota) || nota < 0 || nota > 10)) {
      setMensagem("As notas devem estar entre 0 e 10.");
      setErroModalVisible(true);
    }
    else {
      if (numFaltas > limiteFaltas) {
        setMensagem("Reprovado por falta");
        const faltaPercent = ((numFaltas / aulas) * 100).toFixed(0);
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
  }

    useEffect(() => {
        setHandler(() => {
            setNotas({ LCnota1: "", MEnota2: "", VSnota3: "" });
            setFaltas("");
            setMediaFinal(null);
            setMensagem("");
        });
        return () => setHandler(null); // Limpa o handler
    }, []);

    const validaNumber = (txt, key) => {
        const regex = /^\d*\.?\d{0,2}$/;
        if (regex.test(txt)) {
            setNotas({ ...notas, [key]: txt });
        }
    };

  const formataInput = (key) => {
    let valor = parseFloat(notas[key]);
    if (!isNaN(valor)) {
      setNotas({ ...notas, [key]: valor.toFixed(2) });
    }
  };


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.h1}>Olá, {user}!</Text>
                <Text style={styles.h2}>
                    Aqui você poderá verificar a sua situação na FIAP.
                </Text>
                <Text style={styles.p}>Preencha os campos e verifique!</Text>

                {Object.keys(notas).map((key, index) => (
                    <InputForm
                        key={index}
                        label={`Nota ${index + 1}`}
                        value={notas[key]}
                        onChangeText={(txt) => validaNumber(txt, key)}
                        onBlur={() => formataInput(key)}
                        placeholder={`Insira a nota ${index + 1}`}
                    />
                ))}

                <InputForm
                    label="Faltas"
                    value={faltas}
                    onChangeText={setFaltas}
                    placeholder="Insira o número de faltas"
                />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={calcularMedia}
                >
                    <Text style={styles.submitButtonText}>Verificar</Text>
                </TouchableOpacity>
            </View>

            <Modal
                animationType="fade"
                transparent
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Ionicons
                                name={
                                    mensagem.includes("Aprovado")
                                        ? "checkmark-circle"
                                        : "close-circle"
                                }
                                size={24}
                                color={
                                    mensagem.includes("Aprovado")
                                        ? "#4CD964"
                                        : "#FF3B30"
                                }
                            />
                            <Text style={styles.modalTitle}>{mensagem}</Text>
                        </View>

                        {mediaFinal && (
                            <Text style={styles.modalMedia}>{mediaFinal}</Text>
                        )}

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Ok</Text>
              </TouchableOpacity>
              {mensagem !== "Aprovado com média:" && (
                <TouchableOpacity style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Reconsideração</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de erro - notas invalidas*/}
      <Modal
        animationType="fade"
        transparent={true}
        visible={erroModalVisible}
        onRequestClose={() => setErroModalVisible(false)}
      >
        <View style={styles.modalContainerErro}>
          <View style={[styles.modalContentErro, styles.errorModal]}>
            <Text style={styles.modalText}>{mensagem}</Text>
            <TouchableOpacity style={styles.modalButtonError} onPress={() => setErroModalVisible(false)}>
              <Text style={styles.modalText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111312",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  h1: {
    color: "#fff",
    fontSize: 20,
  },
  h2: {
    color: "#5C6D77",
    fontSize: 16,
    marginTop: 5,
  },
  p: {
    color: "#ED145B",
    fontSize: 16,
    marginVertical: 20,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: "#ED145B",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
    width: 120,
  },
  submitButtonText: {
    color: "#ED145B",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalContent: {
    backgroundColor: "#424242",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    width: 300,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  modalTitle: {
    color: "#BDBEBD",
    fontSize: 16,
    marginLeft: 8,
  },
  modalMedia: {
    color: "#ED145B",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  modalButton: {
    backgroundColor: "#ED145B",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  modalContainerErro: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContentErro: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  errorModal: {
    backgroundColor: "#e74c3c",
  },
  modalText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
},
  modalButtonError: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 5
  }
});