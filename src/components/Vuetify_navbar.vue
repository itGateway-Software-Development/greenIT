<template>
    <!-- Navbar -->
    <v-app-bar app :color="navbarColor" height="78" class="navbar" id="top-navbar">

        <!-- Navbar title -->
        <v-toolbar-title class="headline text-uppercase" id="logo">
            <img :src="logo" />
        </v-toolbar-title>
        
        <!-- Toggle button for mobile -->
        <v-app-bar-nav-icon @click="drawer = !drawer"  id="mobile-menu"></v-app-bar-nav-icon>

        <div id="menu">
            <v-btn>Home</v-btn>
            <v-btn>About Us</v-btn>
            <v-menu
            >
                <template v-slot:activator="{ props }">
                    <v-btn
                    v-bind="props"
                    >
                    Solution Profile <i class="ms-2 fa-solid fa-caret-down"></i>
                    </v-btn>
                </template>
            
                <v-list>
                    <v-list-item style="border-bottom: 1px solid #ccc;">
                    <v-list-item-title >One</v-list-item-title>
                    </v-list-item>
                    <v-list-item style="border-bottom: 1px solid #ccc;">
                        <v-list-item-title>Two</v-list-item-title>
                    </v-list-item>
                    <v-list-item id="dropdown" style="border-bottom: 1px solid #ccc;">
                        <v-list-item-title>Three</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-btn>Services</v-btn>
            <v-btn>Our Partners</v-btn>
            <v-btn>Our Customers</v-btn>

            <v-btn>Contact Us</v-btn>

            <v-menu open-on-hover>
                <template v-slot:activator="{ props }">
                  <v-btn v-bind="props">
                    Home
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item>
                    <v-list-item-title>Submenu 1</v-list-item-title>
                  </v-list-item>
                  
                  <v-menu open-on-hover>
                    <template v-slot:activator="{ props }">
                      <v-list-item v-bind="props">
                        <v-list-item-title>Submenu 3</v-list-item-title>
                      </v-list-item>
                    </template>
                    <v-list>
                      <v-list-item>
                        <v-list-item-title>Submenu 3-1</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Submenu 3-2</v-list-item-title>
                      </v-list-item>
                      <!-- Add more submenus under Submenu 3 -->
                      <v-list-item>
                        <v-list-item-title>Submenu 3-3</v-list-item-title>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>Submenu 3-4</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                  <v-list-item>
                    <v-list-item-title>Submenu 2</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              
        
        </div>

    </v-app-bar>



    <!-- Sidebar (Drawer) for mobile -->
    <v-navigation-drawer app v-model="drawer" :color="navbarColor" id="drawer" temporary>
        <v-list>
            <v-list-item @click="navigate('/')">
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item @click="navigate('/')">
                <v-list-item-title>About</v-list-item-title>
            </v-list-item>

            <v-list-group value="Users">
                <template v-slot:activator="{ props }">
                    <v-list-item
                    v-bind="props"
                    title="Users"
                    ></v-list-item>
                </template>
        
                <v-list-group value="Admin">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Admin"
                    ></v-list-item>
                    </template>
        
                    <v-list-item @click="navigate('/')">
                        <v-list-item-title>1 Admin</v-list-item-title>
                    </v-list-item>
                </v-list-group>
    
                <v-list-item @click="navigate('/')">
                    <v-list-item-title>Modarator</v-list-item-title>
                </v-list-item>
    
            </v-list-group>

        </v-list>


    </v-navigation-drawer>

  
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const drawer = ref(false);
        const router = useRouter();
        const isMobile = computed(() => window.innerWidth < 600);
        
        const navigate = (route) => {
            router.push(route);
            drawer.value = false; // Close the drawer after navigation (for mobile)
        };

        
        const navbarColor = '#fff'; 
        let logo = require('@/assets/images/logo.png');


        return {isMobile, navigate, navbarColor, drawer, logo}
    }
}



</script>

<style>
    #top-navbar {
        padding: 0 15%;
    }

    #mobile-menu {
        display: none;
    }

    #logo img {
        width: 130px;
        height: 90px;
        padding: 20px 0px 0px;
        object-fit: contain;
    }

    #menu > button.v-btn {
        letter-spacing: 0 !important;
        font-size: 13px !important;
    }

    .v-list {
        padding: 0 !important;
        margin-top: 15px;
    }

    .v-list-item {
        min-height: 35px !important;
        width: 240px !important;
    }

    .v-list-item:hover {
        background: #4caf50 !important;
        cursor: pointer;
        color: #fff;
    }

    .submenu-wrapper {
        position: absolute;
        top: 0;
        right: -100%;
      }
    
      .submenu-content {
        display: inline-block;
        min-width: 100px;
        background-color: #fff;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        padding: 8px;
      }


    @media (max-width:1630px) {
        #top-navbar {
            padding: 0 9%;
        }

        #menu > button.v-btn {
            letter-spacing: 0 !important;
            font-size: 12px !important;
        }
    }

    @media (max-width: 490px) {
        #mobile-menu {
            display: block;
        }

        #menu {
            display: none;
        }

        #drawer {
            width: 236px !important;
        }
    }

</style>
