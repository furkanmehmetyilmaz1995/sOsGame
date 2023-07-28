import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, {useState, useEffect} from 'react';
import Board from './Board';

const Oyun = () => {
    const initialBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    const [board, setBoard] = useState(initialBoard);
    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState('');

    useEffect(() => {
        checkWinner();
    }, [board]);

    const handlePress = (rowIndex, cellIndex) => {
        if (board [rowIndex][cellIndex] === '' && !winner){
            const newBoard = [...board];
            newBoard[rowIndex][cellIndex] = player;
            setBoard(newBoard);
            setPlayer(player === 'X' ? 'O' : 'X');
        }
    };

    const checkWinner = () => {
        for (let i:0; i<3; i++) {
            if (
                board[i][0] !== '' &&
                board[i][0] === board[i][1] &&
                board[i][0] === board[i][2]
            ) {setWinner(board[i][0]);
            break;
        }
        }

        for (let i = 0; i < 3; i++) {
            if (
                board[0][i] !== '' &&
                board[0][i] === board[1][i] &&
                board[0][i] === board[2][i]
            ) {
                setWinner(board[0][i]);
                break;
            }
        }

        if (
            board[0][0] !== '' &&
            board[0][0] === board[1][2] &&
            board[0][0] === board[2][2] ) {
                setWinner(board[0][0]);
            } else if (
                board[0][2] !== '' &&
                board[0][2] === board[1][1] &&
                board[0][2] === board[2][0]
            ){
                setWinner(board[0][2]);
            }
    };
    
    const resetBoard = () => {
        setBoard(initialBoard);
        setPlayer('X');
        setWinner('');
    };

    useEffect (() => {
        if (winner) {
            Alert.alert(`Oyuncu ${winner} kazandı!`, ' ', [{text: 'OK', onPress: resetBoard }]);
        }
    }, [winner]);

    useEffect(() => {
        if(!winner) {
            const isBoardFull = board.every((row) => row.every((cell) => cell !== ''));
            if ( isBoardFull) {
                Alert.alert( 'Tekrar Dene', ' ', [{text: 'OK', onPress: resetBoard}]);
            }
        }
    }, [board]);






  return (
    <View style={styles.container}> 
      <Text style={styles.title}>XOX Oyunu</Text>
       <Board board={board} onPress={handlePress} />
       <TouchableOpacity style = {styles.resetButton}
       onPress = {resetBoard}><Text style={styles.resetButtonText}>Yenile</Text></TouchableOpacity>
        </View>
  )
}

export default Oyun

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: '#f8f8f8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 800,
        marginBottom: 20,
    },
    resetButton: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    resetButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '800',
    }
  });
  