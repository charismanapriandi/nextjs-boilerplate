import { Roles } from "core/enum";
import { Store } from "@core";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AccountStore } from "domain/account/account.store";

export default function withProtect(Component: React.FunctionComponent, role: Roles[]) {
  const Protect = observer((props: any) => {
    const router = useRouter();
    const { getAccountDetail, account } = Store.get<AccountStore>(AccountStore.name);

    // authentication
    useEffect(() => {
      getAccountDetail()
        .catch(() => router.push('/auth/sign-in'));
    }, [getAccountDetail, router]);

    // unauthorized
    if (account && role) {
      if (!account.kind.includes(Roles.owner)) {
        router.push('/pos');
      }
    }

    if (account) {
      return <Component {...props} />;
    }
    return null;
  });

  return Protect;
};