


def minMoves(arr):
    """Sort and array of 0 and 1 and returns the min Moves"""

    counter = 0
    mid = len(arr) // 2
    # find where site has more zeros
    leftZeros = arr[:mid].count(0)
    rightZeros = arr[mid:].count(0)

    if leftZeros > rightZeros or (leftZeros == rightZeros and arr[0] == 0):
        """Put all zeros to the left"""

        for i in range(len(arr)):
            for j in range(i, len(arr) - 1):
                if arr[j] == 1 and arr[j + 1] == 0:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
                    counter += 1
    else:
        """Put all zeros to the right"""
        
        for i in range(len(arr)):
            for j in range(i, len(arr) - 1):
                if arr[j] == 0 and arr[j + 1] == 1:
                    arr[j], arr[j + 1] = arr[j + 1], arr[j]
                    counter += 1

    print(arr)

    return counter
                    
                    
arrTest = [1,1,1,0,1,0,0,1,0,1,0] 
print(minMoves(arrTest))