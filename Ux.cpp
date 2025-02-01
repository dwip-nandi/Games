#include <bits/stdc++.h>
using namespace std;

int main() {
    int x = 0;
    int y = 0;
    srand(time(0));
    while (x < 100 && y <100) {
        cout<<"X tern:";
        cin>>x;
        cout<<"Y tern:";
        cin>>y;
        int op = rand()%1;
        int rx =rand()%10;
        int ry =rand()%10;
        int xs=rx;
        int ys=ry;
        if(op = 1){
            xs += x;
            ys += y;
        }
        else{
            xs -= x;
            ys -= y;
        }
        int target =10;
        if (xs == target) {
            cout << "X wins the game." << endl;
            break;
        }else{
            cout<<"x need ="<<target-xs<<endl;
        }
        if (ys == target) {
            cout << "Y wins the game." << endl;
            break;
        }else{
            cout<<"Y need ="<<target-ys<<endl;
        }
    }

    return 0;
}
