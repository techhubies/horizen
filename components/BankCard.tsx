import { formatAmount } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BankCard = (props: CreditCardProps): JSX.Element => {
  const { account, userName, showBalance } = props;

  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card" aria-label="Bank Details">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              {account.name || userName}
            </h1>
            {showBalance && (
              <p className="font-black font-ibm-plex-serif text-white">
                {formatAmount(account.currentBalance)}
              </p>
            )}
          </div>
          <article
            role="article"
            aria-label="Card Details"
            className="flex flex-col gap-2"
          >
            <div className="flex justify-between">
              <h2 className="text-12 font-bold text-white">{userName}</h2>
              <h2 className="text-12 font-bold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>
        <div className="bank-card_icon" aria-hidden="true">
          <Image
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="paypass"
          />
          <Image
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>
        <Image
          src="/icons/lines.svg"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
          aria-hidden="true"
        />
      </Link>
      {/* Copy */}
    </div>
  );
};
