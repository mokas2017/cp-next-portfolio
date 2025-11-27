'use client';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// Définition des liens de navigation
const navigation = [
  { name: 'Accueil', href: '/', description: "Retour à l’accueil du portfolio." },
  { name: 'A Propos', href: '/apropos', description: "Parcours de Med Karim Slouma." },
  { name: 'Clients', href: '/users', description: "Collaborations et références." },
  { name: 'Produits', href: '/produits', description: "Solutions conçues sur mesure." },
  { name: 'Services', href: '/services', description: "Offres d’accompagnement technique." },
  { name: 'Contact', href: '/contact', description: "Coordonnées et formulaire." },
]

// Fonction utilitaire pour la gestion des classes CSS
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Composant principal de la barre de navigation
export default function NavBarre() {
  const pathname = usePathname()
  return (
    <Disclosure as="nav" className="relative bg-base-100 border-b border-base-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo et navigation desktop */}
          <div className="flex flex-1 items-center gap-4">
            <img
              alt="Slouma's Portfolio"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-10 w-auto"
            />
            {/* Menu desktop sous forme de cartes DaisyUI */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-4 xl:grid-cols-6">
              {navigation.map((item) => {
                const active = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={classNames(
                      active ? 'border-primary shadow-lg shadow-primary/20' : 'border-base-200 hover:border-primary/70 hover:shadow-lg hover:shadow-primary/10',
                      'card card-compact h-full border bg-base-200/70 transition'
                    )}
                  >
                    <div className="card-body">
                      <h3 className={classNames(active ? 'text-primary' : 'text-base-content', 'text-sm font-semibold')}>
                        {item.name}
                      </h3>
                      <p className="text-xs text-base-content/70">{item.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          {/* Actions à droite : notifications, profil, menu mobile */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="btn btn-circle btn-ghost btn-sm text-base-content"
              aria-label="Notifications"
            >
              <BellIcon aria-hidden="true" className="h-5 w-5" />
            </button>
            {/* Menu utilisateur */}
            <Menu as="div" className="relative">
              <MenuButton className="avatar placeholder">
                <div className="w-10 rounded-full bg-primary/20 text-primary">MK</div>
              </MenuButton>
              <MenuItems className="menu menu-sm dropdown-content mt-3 w-48 rounded-box bg-base-200 p-2 shadow text-black">
                <MenuItem>
                  <Link href="/apropos">
                    Mon profil
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    Se déconnecter
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
            {/* Bouton menu mobile */}
            <DisclosureButton className="btn btn-square btn-ghost md:hidden" aria-label="Ouvrir le menu principal">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </DisclosureButton>
          </div>
        </div>
      </div>
      {/* Menu mobile sous forme de cartes DaisyUI */}
      <DisclosurePanel className="md:hidden border-t border-base-200 bg-base-100">
        <div className="grid gap-3 px-4 py-4">
          {navigation.map((item) => {
            const active = pathname === item.href
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={classNames(
                  active ? 'border-primary shadow-md shadow-primary/20' : 'border-base-200 hover:border-primary/60 hover:shadow-md hover:shadow-primary/10',
                  'card card-compact border bg-base-200/80 transition'
                )}
              >
                <div className="card-body">
                  <h3 className={classNames(active ? 'text-primary' : 'text-base-content', 'text-sm font-semibold')}>
                    {item.name}
                  </h3>
                  <p className="text-xs text-base-content/70">{item.description}</p>
                </div>
              </DisclosureButton>
            )
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}