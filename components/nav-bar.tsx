
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

export default function NavBar() {
 return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger>
                    <Button>Home</Button>
                </NavigationMenuTrigger>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
 )
}