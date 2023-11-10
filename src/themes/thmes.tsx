
export function Themes(gameType: string){
    switch(gameType) {
      case 'megasena': return '#6BEFA3'; break;
      case 'quina': return '#8666EF'; break;
      case 'lotofacil': return '#DD7AC6'; break;
      case 'lotomania': return '#FFAB64'; break;
      case 'timemania': return '#5AAD7D'; break;
      case 'luckDay': return '#BFAF83'; break;
    }
}