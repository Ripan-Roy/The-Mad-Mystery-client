#include <bits/stdc++.h>
#define ll long long
using namespace std;

int main()
{
    ll t;
    cin >> t;
    while (t--)
    {
        ll n, l, s;
        cin >> n >> l >> s;
        bool flag = false;
        for (ll i = 0; i < n; i++)
        {
            ll start = i;
            ll end = i + l;
            if (end > n)
                break;
            ll sum = 0;
            for (ll j = start; j < end; j++)
            {
                sum += (j + 1);
            }
            if (sum == s)
            {
                flag = true;
                break;
            }
        }
        if (flag)
        {
            cout << "YES\n";
        }
        else
        {
            cout << "NO\n";
        }
    }
    return 0;
}
