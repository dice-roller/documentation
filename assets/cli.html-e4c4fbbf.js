import{_ as i,r as a,o,c as d,a as n,d as e,b as s,w as c,e as p}from"./app-d7a80b43.js";const m={},u={id:"cli",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#cli","aria-hidden":"true"},"#",-1),v={href:"https://github.com/dice-roller/cli",target:"_blank",rel:"noopener noreferrer"},b=p(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><p>Install the script globally:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @dice-roller/cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="roll-some-dice" tabindex="-1"><a class="header-anchor" href="#roll-some-dice" aria-hidden="true">#</a> Roll some dice</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>roller &lt;notation..&gt; [options]

Commands:
  roller roll &lt;notation..&gt;  roll the dice                              [default]
  roller play               play an interactive CLI dice game

Positionals:
  notation  space separated list of notation to roll                    [string]

Options:
  -V, --version      Show version number                               [boolean]
      --help         Show help                                         [boolean]
  -s, --separator    String to separate dice rolls      [string] [default: &quot;; &quot;]
  -e, --engine       The RNG engine to use                              [string]
      --seed         The RNG engine seed                                [number]
  -f, --format       The output format              [string] [default: &quot;string&quot;]
      --result-only  Only return the roll result, without the notation or dice
                     rolled                           [boolean] [default: false]

Examples:
  roller 4d6     roll a 6 sided die 4 times
  roller 2d10+7  roll a 10 sided die 2 times and add 7
  roller play    start the interactive CLI dice game

For more information visit https://dice-roller.github.io/documentation
</code></pre></div><h3 id="play-a-game" tabindex="-1"><a class="header-anchor" href="#play-a-game" aria-hidden="true">#</a> Play a game</h3><div class="language-text" data-ext="text"><pre class="language-text"><code>roller play

play an interactive CLI dice game

Options:
  -V, --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
      --players  The name of a player                                    [array]
      --count    The number of players                                  [number]

For more information visit https://dice-roller.github.io/documentation
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Roll a 6 sided die 4 times</span>
roller 4d6

<span class="token comment"># Roll a series of dice</span>
roller 2d10 7d% 5dF

<span class="token comment"># Notation with spaces must be surrounded with quotes</span>
roller <span class="token string">&quot;4d6 # roll description&quot;</span>

<span class="token comment"># Use the MersenneTwister19937 engine (\`seed\` is not required)</span>
roller 4d6 <span class="token parameter variable">-e</span><span class="token operator">=</span>MersenneTwister19937 <span class="token parameter variable">--seed</span><span class="token operator">=</span><span class="token number">415</span>

<span class="token comment"># Return just the result rolled</span>
roller 2d20 --result-only

<span class="token comment"># Output the result in base64 encoding</span>
roller 6d8*4 <span class="token parameter variable">-f</span><span class="token operator">=</span>BASE_64

<span class="token comment"># Start the interactive dice game</span>
roller play

<span class="token comment"># Start the game with 4 players</span>
roller play <span class="token parameter variable">--count</span><span class="token operator">=</span><span class="token number">4</span>

<span class="token comment"># Start the game with 2 players called Barbara and Ian</span>
roller play <span class="token parameter variable">--players</span><span class="token operator">=</span>Barbara Ian

<span class="token comment"># Start the game with two players, but only name the first one</span>
roller play <span class="token parameter variable">--count</span><span class="token operator">=</span><span class="token number">2</span> <span class="token parameter variable">--players</span><span class="token operator">=</span>Susan
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function g(k,f){const l=a("Badge"),t=a("ExternalLinkIcon"),r=a("RouterLink");return o(),d("div",null,[n("h1",u,[h,e(" CLI "),s(l,{text:"New",vertical:"middle"})]),n("p",null,[e("To use this library directly in the command line, you need to install the "),n("a",v,[e("CLI library"),s(t)]),e(".")]),b,n("p",null,[e("You can use all the "),s(r,{to:"/guide/notation/"},{default:c(()=>[e("notation")]),_:1}),e(" in the CLI.")])])}const _=i(m,[["render",g],["__file","cli.html.vue"]]);export{_ as default};
