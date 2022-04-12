import axios from 'axios';

export default {
  submitMoves: (id: string, moves: any) => {
    return axios.post('api/submitMoves', {id, moves})
  }
}