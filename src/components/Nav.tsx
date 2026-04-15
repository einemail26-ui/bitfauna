'use client'
import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Nav() {
  return (
    <header>
      <div className="hdr">
        <Link href="/" className="hdr-logo">BITFAUNA</Link>
        <div className="hdr-nav">
          <Link href="/canvas">Canvas</Link>
          <a href="https://opensea.io" target="_blank" rel="noopener">OpenSea</a>
        </div>
        <div className="hdr-right">
          <div className="hdr-wallet-wrap">
            <ConnectButton.Custom>
              {({ account, openAccountModal, openConnectModal, mounted }) => {
                if (!mounted) return null
                if (!account) return (
                  <button onClick={openConnectModal} className="hdr-btn">
                    <span className="w-dot" />
                    [Connect]
                  </button>
                )
                return (
                  <button onClick={openAccountModal} className="hdr-btn connected">
                    <span className="w-dot live" />
                    {account.displayName}
                  </button>
                )
              }}
            </ConnectButton.Custom>
          </div>
        </div>
      </div>
    </header>
  )
}
