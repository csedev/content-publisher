<script setup lang="ts">

const links = [{
    label: 'Home',
    icon: 'i-heroicons-home'
}, {
    label: 'Inbox',
    icon: 'i-heroicons-inbox',
    badge: '4'
}, {
    label: 'Users',
    icon: 'i-heroicons-user-group'
}, {
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
    children: [{
        label: 'General'
    }, {
        label: 'Members'
    }, {
        label: 'Notifications'
    }]
}]

</script>

<template>
    <template>
        <UDashboardLayout>
            <UDashboardPanel id="panel" collapsible :width="300" :resizable="{ min: 200, max: 400 }">
                <UDashboardNavbar>
                    <template #left>
                    </template>
                </UDashboardNavbar>
                <UDashboardNavbar title="Theme" description="Customize the look and feel of your dashboard.">
                    <template #left>
                        <UColorModeSelect color="gray" />
                    </template>
                </UDashboardNavbar>
                <UDashboardSidebar>
                    <UDashboardSidebarLinks :links="links" />
                </UDashboardSidebar>

            </UDashboardPanel>
            <slot />
        </UDashboardLayout>
    </template>
</template>
