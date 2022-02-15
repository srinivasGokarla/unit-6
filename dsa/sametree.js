
function isSameTree(a,b){
    if (a == null && b == null)
            return true;
            
        if (a != null && b != null)
        {
            return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
            
        }
         
        return false;
    }
    