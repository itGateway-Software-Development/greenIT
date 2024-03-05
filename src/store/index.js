import { createStore } from "vuex";

export default createStore({
  state: {
    service: null,
    services: [
      {
        title: "Data Center Services & Solutions",
        slug: "data-center",
        p: `Data center services and solutions encompass a range of offerings related to the management, storage, processing, and distribution of data. These services include hosting servers, storage systems, networking equipment, and other infrastructure components to support the computing needs of organizations. Solutions may also involve virtualization, cloud computing, and cybersecurity measures to ensure data integrity and availability. Overall, data center services aim to provide a reliable and efficient environment for handling and storing digital information.`,
        sub_title_1: `Data Center Services & Solutions`,
        list_one: [
          "Server Virtualization",
          "Storage Virtualization",
          "Network Virtualization",
          "Hardware Virtualization",
          "Physical to Virtual (P2V) Migration",
          "Virtual to Virtual (V2V) Migration",
          "On-Premise to Cloud Server Migration",
          "Server Backup System Deployment",
          "Datacenter Backup Solutions",
          "DC/DR Deployment",
          "Hybrid Cloud Server Deployment",
        ],
        sub_title_2: `Data Center Physical Security Solution`,
        list_two: [
          "Fire Alarm & Fire Suppression System",
          "IP CCTV & Access Control System",
          "Management & Monitoring System",
        ],
        img: require("@/assets/images/icon/DataCenter.png"),
        banner_img: require("@/assets/images/dc_solution.jpg"),
        preview_img: require("@/assets/images/dc1.jpg"),
      },
      {
        title: "Virtualization Services & Solutions",
        slug: "virtualization",
        p: `Virtualization services and solutions involve creating virtual versions of computer resources, such as servers, storage, and networks, using software instead of physical hardware. This allows you to run multiple operating systems and applications on a single physical machine, improving resource utilization, scalability, and agility. <br>
        <b>Servers</b> : Instead of having multiple physical servers, you can create virtual machines (VMs) on a single physical server. Each VM acts like a separate server with its own operating system and applications. <br>
        <b>Storage</b> : Virtualization can pool physical storage resources from multiple disks into a single virtual storage pool, making it easier to manage and allocate storage space. <br>
        <b>Network</b> : Network virtualization creates virtual networks that are independent of the underlying physical infrastructure. This allows for more flexible and efficient network management. <br>
        Reduced costs, Increased agility, Improved disaster recovery, Better resource utilization, Enhanced security.
                `,
        sub_title_1: `Virtualization Solution`,
        list_one: [
          "Application Virtualization",
          "Desktop Virtualization",
          "Hardware Virtualization",
          "Network Virtualization",
          "Operating System (OS) Virtualization",
          "Server Virtualization",
          "Storage Virtualization",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/vmware.png"),
        banner_img: require("@/assets/images/vmware-banner.png"),
        preview_img: require("@/assets/images/vmware.jpg"),
      },
      {
        title: "Cloud & Hybrid Cloud Solutions",
        slug: "cloud-solution",
        p: `Cloud computing is the delivery of IT services over the internet. <br>
                Cloud computing is constantly evolving, which is why we have a dedicated technical team who
                research and test the latest and best cloud solutions available. By hosting your existing systems and
                applications in the cloud, you minimize the risk of data loss and improve your ability to work
                remotely.
                <br>
                By partnering with some of the world’s leading cloud solution providers, we can help you maximize
                your cloud solutions and infrastructure, scaling them to meet your business’s needs.
                `,
        sub_title_1: `Green IT optimizes`,
        list_one: [
          "Amazon Web Services",
          "Microsoft Azure",
          "Office 365",
          "Google",
          "Alibaba Cloud",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/cloud.png"),
        banner_img: require("@/assets/images/cloud-banner.png"),
        preview_img: require("@/assets/images/cloud.jpg"),
      },
      {
        title: "Infrastructure Services & Solutions",
        slug: "infracture",
        p: `Infrastructure services and solutions refer to the foundational components that support an organization's IT operations. These include hardware, networking, storage, and computing resources. Infrastructure services encompass the provision and maintenance of these core elements, ensuring they operate effectively to support various applications and business processes. Solutions in this context often involve designing, implementing, and managing the infrastructure to meet specific business needs. Cloud computing, virtualization, and software-defined approaches are common elements in modern infrastructure solutions. The goal is to create a scalable, secure, and efficient IT environment that enables organizations to deliver their services and applications effectively.
                `,
        sub_title_1: `These services are designed to help your organization`,
        list_one: [
          "IT Infrastructure Consulting",
          "Infrastructure Management",
          "Wide Infrastructure Services",
          "Advance Networking Services",
          "Cloud Infrastructure Services",
          "Data center Management",
          "Virtual Desktop Infrastructure Services",
          "Site Survey Services",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/Infra.png"),
        banner_img: require("@/assets/images/infra_banner.jpg"),
        preview_img: require("@/assets/images/infra1.jpeg"),
      },
      {
        title: "Security Services & Solution",
        slug: "security",
        p: `The ever-evolving security attack techniques that impact every part of our client's networks worry them and their auditors. Because malware may propagate laterally and users are becoming more mobile, traditional firewalls are insufficient. We provide adaptable, all-inclusive network security solutions with seamless integration and identity-based safeguards to allay these worries. <br>
                Keeps cyber attackers out of your network, data, and organization.
                Combats the evolving threats to email and online security
                Enhances visibility to understand what's going on in your network by exposing vulnerabilities and accelerating problem resolution`,
        sub_title_1: `We, Green IT offers comprehensive security service revolving around:
                `,
        list_one: [
          "Next-Generation Firewall and Advanced Threat Management",
          "ASA, FirePower, SRX, FortiGate, PaloAlto, Sonicwall, Checkpoint",
          "Intrusion Prevention System",
          "Web Security & Email Security",
          "Zero-Day Malware detection and prevention",
          "Application Threat Protection",
          "Endpoint Protection",
          "VPN(AnyConnect)",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/security.png"),
        banner_img: require("@/assets/images/security_banner.jpg"),
        preview_img: require("@/assets/images/security1.jpg"),
      },
      {
        title: "Wireless Network Solutions",
        slug: "wireless-solution",
        p: `Wireless network solutions offer seamless internet access and device connectivity without the constraints of physical cables. These solutions leverage various technologies to create robust and scalable networks for homes, businesses, and public spaces. <br>
        <b>Extend coverage</b> : Access points strategically placed throughout a space transmit and amplify radio waves, enabling devices to connect to the network. <br>
        <b>Manage traffic</b> : Routers handle data flow between devices and the internet, ensuring smooth navigation and efficient bandwidth allocation. <br>
        <b>Enhance security</b> : Encryption protocols safeguard data transmission and access control features prevent unauthorized connections.<br>
        <b>Optimize performance</b> : Advanced network management tools allow monitoring, troubleshooting, and configuration for optimal performance.
                `,
        sub_title_1: null,
        list_one: [
          "Controller",
          "Controller-less",
          "Cloud-managed options",
          "Point to Point",
          "Point to Multi-Point options",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/wireless.png"),
        banner_img: require("@/assets/images/wireless-banner.jpg"),
        preview_img: require("@/assets/images/wireless.jpg"),
      },
      {
        title: "Remote Monitoring & Management Solutions",
        slug: "remote-monitor-solution",
        p: `Remote Monitoring & Management can help businesses gain insight into the performance, health, and status 
                of their various IT assets.They can also help IT
                professionals discover new assets, detect issues and
                resolve them remotely. With properly maintained remote
                monitoring, businesses will improve both network
                performance and network security.
                
                `,
        sub_title_1: null,
        list_one: [
          "Monitor IT assets including endpoints, computers, and applications",
          "Monitor network performance, security and availability",
          "Discover and track IT-related issues",
          "Allow remote administrators to access endpoints",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/remote-monitor.png"),
        banner_img: require("@/assets/images/remote-monitor-banner.png"),
        preview_img: require("@/assets/images/remote-monitor.png"),
      },
      {
        title: "Bandwidth & WAN acceleration Management",
        slug: "bandwidth-solution",
        p: `
          Effectively managing both bandwidth and WAN acceleration requires a combination of tools and strategies. Some key considerations include: <br>
          <b>Choosing the right tools</b> : Network monitoring and management software can provide insights into data usage and help implement bandwidth shaping and traffic prioritization. <br>
          <b>WAN optimization appliances</b> : Dedicated hardware or software can be deployed at branch offices or edge locations to implement WAN acceleration techniques. <br>
          <b>Cloud-based solutions</b> : Cloud-based tools can simplify WAN management and optimization, especially for geographically dispersed networks. <br>
          By actively managing your bandwidth and implementing WAN acceleration strategies, you can ensure your data flows smoothly and efficiently, keeping your users productive and your business operations running smoothly.
        `,
        sub_title_1: `WAN acceleration use cases include the following: `,
        list_one: [
          "improving response times for business applications over WAN links and mobile connections;",
          "optimizing traffic from data center to data center for faster storage replication;",
          "improving enterprise investment in bandwidth; and",
          "moving traffic across hybrid WANs that include public cloud connectivity to access cloud applications.",
        ],
        sub_title_2: null,
        list_two: [
          "Limiting bandwidth for data transfers",
          "Reserving bandwidth for specific services",
          "Data Flow Monitoring",
          "Managing User Policies",
          "WAN Link Clustering",
        ],
        img: require("@/assets/images/icon/bandwidth.png"),
        banner_img: require("@/assets/images/bandwidth-banner.png"),
        preview_img: require("@/assets/images/bandwidth.jpg"),
      },
      {
        title: "Endpoint Protection & Management Solutions",
        slug: "endpoint-protection-solution",
        p: `Various
                cybersecurity solutions can be installed on and monitor these devices to protect them against cyber
                threats regardless of where they are located on or off of the corporate network. 
                <br>
                We, Green IT ready to help you to reduce the risk of attacks and prevent them from happening.
                `,
        sub_title_1: `Endpoint protection involves`,
        list_one: [
          "monitoring and protecting endpoints against cyber threats",
          "Protected endpoints include desktops, laptops, smartphones, tablet computers other devices",
          "improving enterprise investment in bandwidth; and",
          "moving traffic across hybrid WANs that include public cloud connectivity to access cloud applications.",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/end-protection.png"),
        banner_img: require("@/assets/images/end-protection-banner.jpg"),
        preview_img: require("@/assets/images/end-protection.jpg"),
      },
      {
        title: "Conferencing Solutions",
        slug: "conferencing-solution",
        p: `Video conferencing solutions allow your team to meet and collaborate more effectively, increasing
                productivity, saving you time and money, and allowing your business to grow. Strengthen valued
                relationships with partners, suppliers, internal teams, remote workers, investors, and customers
                through a unified experience.
                <br>
                Working with a number of leading video conferencing vendors, our experienced team will ensure
                that you benefit from the introduction of a video solution that meets your needs both now and in
                the future.
                `,
        sub_title_1: null,
        list_one: null,
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/conferencing.png"),
        banner_img: require("@/assets/images/conferencing-banner.jpg"),
        preview_img: require("@/assets/images/conferencing.jpg"),
      },
      {
        title: "VOIP Solutions",
        slug: "voip",
        p: `Make and receive calls from anywhere. VoIP powers the modern workforce with flexible, reliable,
                high-quality voice communications.
                We always keep our focus on offering a hassle-free solution to our customers. Simplify your
                communications with us. As a fully managed IT service provider, Green IT can provide VoIP
                service from consultation all the way through to implementation of your phone service by
                partnering with the most industry leading VOIP Solutions Vendors.`,
        sub_title_1: null,
        list_one: null,
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/voip.png"),
        banner_img: require("@/assets/images/voip_banner.jpeg"),
        preview_img: require("@/assets/images/voip1.jpg"),
      },
      {
        title: "Server Solutions",
        slug: "server",
        p: `A server solution is a term that refers to the combination of hardware, software, and services that enable a server to perform a specific function or task. A server solution can vary depending on the type, size, and purpose of the server, as well as the needs and preferences of the customer. Some examples of server solutions are:`,
        sub_title_1: `We supply all type of servers by partnering with the following vendors and provide solutions:
                `,
        list_one: [
          "Workgroup/Domain Server",
          "File/Print/DHCP/DNS Server",
          "Backup Server",
          "Web Server",
          "Voice Server",
          "Email Server",
          "Application Server",
          "Terminal Server",
          "Small Business Server",
          "Storage Server",
          "VPN Server",
          "E-Commerce Server",
          "Database Server",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/ServerStorage.png"),
        banner_img: require("@/assets/images/server_banner.jpg"),
        preview_img: require("@/assets/images/server1.jpeg"),
      },
      {
        title: "Storage Solutions",
        slug: "storage-solution",
        p: `A storage solution is a term that refers to the products and services that help store, manage, and protect data and files. A storage solution can be physical, such as a hard drive, a flash drive, or a CD, or virtual, such as a cloud storage service, a network-attached storage (NAS) device, or a storage area network (SAN). A storage solution can vary depending on the type, size, and purpose of the data and files, as well as the needs and preferences of the customer. Some examples of storage solutions are:
                `,
        sub_title_1: `Type of storage, kind of services and solutions we provided:
                `,
        list_one: [
          "Direct Attach Storage Solutions",
          "Network Attach Storage Solutions",
          "SAN Storage Services & Solutions",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/storage.png"),
        banner_img: require("@/assets/images/storage-banner.jpg"),
        preview_img: require("@/assets/images/storage.jpg"),
      },
      {
        title: "Power Backup Solutions",
        slug: "power-backup",
        p: `Power Backup Solution is became inevitable part of today's IT need of any businesses. We provide
                Power Management Solutions for mission critical applications where power quality and reliability are
                essential. We work with the leading manufacturers to provide UPS Systems, IPS Systems and 48V DC
                Systems for applications such as IT, Data Centre, Industrial, Medical and Telecoms.
                
                <br>
                Whether you are a small business or a multi-national company we have both the products and
                services the experience to provide solutions you can trust.
                `,
        sub_title_1: null,
        list_one: null,
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/power.png"),
        banner_img: require("@/assets/images/power-banner.jpg"),
        preview_img: require("@/assets/images/power.jpg"),
      },
      {
        title: "Rack & Racking Solutions",
        slug: "rack-solution",
        p: `Rack and racking solutions are terms that refer to the products and services that help organize, store, and manage various types of equipment, such as servers, computers, network devices, and more. Rack and racking solutions can include different types of racks, such as open frame, enclosed, wall mount, and portable racks, as well as accessories, such as shelves, rails, mounts, and cables. Rack and racking solutions can also involve design, installation, and maintenance of the rack systems, depending on the customer's needs and preferences. Rack and racking solutions can provide benefits such as saving space, improving airflow, enhancing security, and increasing efficiency.
                `,
        sub_title_1: `Available racks and racking solutions offered by Green IT:
                `,
        list_one: [
          "Server Rack, Network Rack, Open Frame, Enclosure",
          "Rack Shelves & Cable Management Arm",
          "Rack components & Mounting Hardware accessories",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/rack-solution.png"),
        banner_img: require("@/assets/images/rack-solution-banner.jpg"),
        preview_img: require("@/assets/images/rack-solution.jpg"),
      },
      {
        title: "KVM & KMM Solutions",
        slug: "kvm-kmm",
        p: `Simplify administration, reduce cable clutter and minimize server downtime with KVM & KMM
                solutions offered by Green IT. From a single console, you can perform large-scale updates and manage
                up to 1,024 local and remote servers running various operating systems. And with compact designs,
                you can conserve valuable rack space in your data center.
                <br>
                We, Green IT proud to offer KVM/KMM Products and Solutions from the following vendors. 
                `,
        sub_title_1: null,
        list_one: null,
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/kvm.png"),
        banner_img: require("@/assets/images/kvm-banner.avif"),
        preview_img: require("@/assets/images/kvm.png"),
      },
      {
        title: "Server Rental Service",
        slug: "server-rental",
        p: `Server rental service can be useful for customers who need a dedicated server for a specific project, such as a website, an application, or a game, and do not want to invest in buying and managing their own server. Server rental service can also provide scalability, flexibility, and reliability for customers who need to handle high traffic, complex workloads, or changing demands.`,
        sub_title_1: `
                Server Rental is sub-directory of Green IT Co.,Ltd. Our rental service offer:
                `,
        list_one: [
          "Server",
          "Storage",
          "NAS",
          "Router",
          "Switch",
          "Firewall",
          "Wireless AP & Wireless Controller",
        ],
        sub_title_2: null,
        list_two: null,
        img: require("@/assets/images/icon/ServerRental.png"),
        banner_img: require("@/assets/images/server_rental_banner.jpg"),
        preview_img: require("@/assets/images/server_rental1.jpg"),
      },
    ],
  },
  getters: {
    getServices(state) {
      return state.services;
    },
  },
  mutations: {
    setService: (state, service) => (state.service = service),
  },
  actions: {
    getService: (context, slug) => {
      let service = context.state.services.find(
        (service) => service.slug == slug
      );

      context.commit("setService", service);
    },
  },
  modules: {},
});
