var exist = function(board, word) {
    let m = board.length, n = board[0].length;
    const used = Array.from({ length: m }, () => new Array(n).fill(false)); 
    
    function dfs(i, j, k) {  
        if (k === word.length) {
            return true;
        }

        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k] || used[i][j]) {
            return false;
        }
        
        used[i][j] = true;
        
        const res=dfs(i + 1, j, k + 1) || 
                    dfs(i - 1, j, k + 1) || 
                    dfs(i, j + 1, k + 1) || 
                    dfs(i, j - 1, k + 1);
        
        used[i][j] = false;
        return res;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true;
            }
        }
    }
    
    return false;
};