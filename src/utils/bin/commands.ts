// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const su = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // Rickroll
  return `Nice try, but with little power comes... no responsibility?`;
};

export const neofetch = async (args?: string[]): Promise<string> => {
  return `
OS: Portfolio.sh  
Kernel: 6.1.12  
Uptime: ∞  
Packages: 1337  
Shell: bash  
CPU: Intel Core i7-1337  
GPU: NVIDIA RTX 4090  
Memory: 64GB RAM  
Terminal: This one :)  
  `;
};

export const hack = async (args?: string[]): Promise<string> => {
  return `Initiating hack sequence...  
[█████████-------] 50%  
[███████████████] 100%  
Access Granted! (Just kidding 😆)`;
};

export const matrix = async (args?: string[]): Promise<string> => {
  return `01001000 01100101 01101100 01101100 01101111  
01110111 01101111 01110010 01101100 01100100`;
};

export const gui = async (args?: string[]): Promise<string> => {
  window.open("http://adi-kulkarni.in", "_blank");
  return "Opening graphical interface...";
};


export const df = async (args?: string[]): Promise<string> => {
  return `
Filesystem      Size  Used Avail Use% Mounted on  
/dev/sda1      100G   69G   31G  69%  /  
tmpfs           16G    0   16G   0%  /tmp  
/dev/sdb1      1.0T  500G  500G  50%  /mnt/storage  
  `;
};

export const top = async (args?: string[]): Promise<string> => {
  return `
PID   USER      PR  NI    VIRT    RES    SHR S  %CPU %MEM     TIME+ COMMAND  
1337  visitor   20   0  163944  12040   8016 S   0.7  0.2   0:01.12 portfolio.sh  
69    root      20   0  452888  39488   9996 S   0.1  0.7   0:00.99 fake-process  
  `;
};

export const ping = async (args?: string[]): Promise<string> => {
  return `PING google.com (142.250.187.142): 56 data bytes  
64 bytes from 142.250.187.142: icmp_seq=1 ttl=118 time=14.2 ms  
64 bytes from 142.250.187.142: icmp_seq=2 ttl=118 time=15.0 ms  
64 bytes from 142.250.187.142: icmp_seq=3 ttl=118 time=14.8 ms  
--- google.com ping statistics ---  
3 packets transmitted, 3 received, 0% packet loss, time 3000ms  
rtt min/avg/max/mdev = 14.2/14.6/15.0/0.3 ms`;
};

export const cat = async (args: string[]): Promise<string> => {
  if (args[0] === "readme.txt") {
    return `Welcome to my portfolio! Type 'help' to see available commands.`;
  } else {
    return `cat: ${args[0]}: No such file or directory`;
  }
};

let commandHistory: string[] = [];

export const history = async (args?: string[]): Promise<string> => {
  return commandHistory.join('\n');
};

export const saveCommand = (cmd: string) => {
  commandHistory.push(cmd);
};


export const pwd = async (): Promise<string> => {
  const locations = [
    "/home/your/mom's/house",
    "/root/but-you-ain't-root",
    "/var/log/where-am-i",
    "/usr/bin/looking-for-love",
    "/dev/null/404-not-found",
    "/opt/this-is-not-windows",
    "/home/visitor/lost-and-found"
  ];
  
  // Pick a random location
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  return randomLocation;
};


// Banner
export const banner = (args?: string[]): string => {
  return `
 ███████████                      █████       ██████           ████   ███                      █████     
░░███░░░░░███                    ░░███       ███░░███         ░░███  ░░░                      ░░███      
 ░███    ░███  ██████  ████████  ███████    ░███ ░░░   ██████  ░███  ████   ██████      █████  ░███████  
 ░██████████  ███░░███░░███░░███░░░███░    ███████    ███░░███ ░███ ░░███  ███░░███    ███░░   ░███░░███ 
 ░███░░░░░░  ░███ ░███ ░███ ░░░   ░███    ░░░███░    ░███ ░███ ░███  ░███ ░███ ░███   ░░█████  ░███ ░███ 
 ░███        ░███ ░███ ░███       ░███ ███  ░███     ░███ ░███ ░███  ░███ ░███ ░███    ░░░░███ ░███ ░███ 
 █████       ░░██████  █████      ░░█████   █████    ░░██████  █████ █████░░██████  ██ ██████  ████ █████
░░░░░         ░░░░░░  ░░░░░        ░░░░░   ░░░░░      ░░░░░░  ░░░░░ ░░░░░  ░░░░░░  ░░ ░░░░░░  ░░░░ ░░░░░ 
                                                                                                         

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
If you're not familiar with the CLI, type 'gui' to open the graphical interface.

`;
};
